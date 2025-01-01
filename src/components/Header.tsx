import { useState, useEffect } from 'react';
import { Menu, X, Link } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Produtos', id: 'products' },
    { label: 'Sobre', id: 'about' },
    { label: 'Contato', id: 'contact' },
    { label: 'FAQ', id: 'faq' },
  ];

  const style = {
    borderBottom: '1px solid rgba(244, 244, 244, 0.01)',
  }

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent border-b border-border '
      )} 
      style={style}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold font-heading">Dynamic Bases</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <Button asChild className="gap-2">
              <a target="_blank" href="https://discord.gg/yJHNm9aK2y">
                <Link  className="h-5 w-5" />
                Discord
              </a>
            </Button>
          </div>

          <button
            className="md:hidden text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    handleNavClick(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}