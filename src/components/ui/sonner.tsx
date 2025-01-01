import { useTheme } from 'next-themes';
import { Toaster as Sonner, toast } from 'sonner';
import { cn } from '@/lib/utils';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = (props: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className={cn('toaster group', props.className)}
      position="bottom-right"
      duration={5000}
      closeButton={true}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-green-500 group-[.toast]:text-white hover:bg-green-600 transition-all duration-300 ease-in-out',
          cancelButton:
            'group-[.toast]:bg-gray-700 group-[.toast]:text-gray-300 hover:bg-gray-800 transition-all duration-300 ease-in-out',
          closeButton:
            'group-[.toast]:bg-red-500 group-[.toast]:text-white hover:bg-red-600 transition-all duration-300 ease-in-out text-xs flex justify-center items-center',
        },
        closeButton: true,
      }}
      {...props}
    >
    </Sonner>
  );
};

export { Toaster, toast as toast };
