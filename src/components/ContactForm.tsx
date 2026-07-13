import { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { WEB3FORMS_ACCESS_KEY, isFormConfigured } from '@/config';
import { profile } from '@/data/portfolio';

const initialState = { name: '', email: '', subject: '', message: '' };

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const openMailto = () => {
    const subject = encodeURIComponent(formData.subject || `Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // No backend configured → hand off to the visitor's mail client.
    if (!isFormConfigured()) {
      openMailto();
      toast.info('Opening your email app…', {
        description: 'Add a Web3Forms key to send directly from the site.',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: formData.name,
          subject: formData.subject || `Portfolio contact from ${formData.name}`,
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Message sent!', { description: "Thanks for reaching out — I'll reply soon." });
        setFormData(initialState);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch {
      toast.error('Could not send via the form', { description: 'Opening your email app instead…' });
      openMailto();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name
          </label>
          <Input
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="bg-background/50 border-border/50 focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="bg-background/50 border-border/50 focus:border-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          className="bg-background/50 border-border/50 focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about the role or project…"
          rows={5}
          className="bg-background/50 border-border/50 focus:border-primary resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 shimmer-btn"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Send Message
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
