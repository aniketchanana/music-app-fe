import React from 'react';

interface TypographyProps {
  variant: 'heading' | 'subheading' | 'body' | 'caption';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
const typographyStyling = {
  heading: 'text-2xl font-bold',
  subheading: 'text-xl font-semibold',
  body: 'text-base',
  caption: 'text-sm',
};
const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
  onClick,
}) => {
  const baseClass = 'text-gray-400';
  const variantClasses = typographyStyling[variant];
  return (
    <p
      className={`${baseClass} ${variantClasses} ${className}`}
      {...(onClick ? { onClick } : {})}
    >
      {children}
    </p>
  );
};

export default Typography;
