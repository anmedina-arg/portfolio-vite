import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  href: string
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  href,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      <a href={href} target='_blank' style={{ textDecoration: 'none' }}>
        {label}
      </a>
    </button>
  );
};
