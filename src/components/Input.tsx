import React, { useState } from 'react';
import Typography from './Typography';

interface InputProps {
  label?: string;
  rightTop?: React.ReactNode;
  type?: 'text' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  leftIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  rightTop = null,
  leftIcon = null,
  className = '',
}) => {
  const [isPassword, setIsPassword] = useState(type === 'password');
  const togglePasswordVisibility = () => setIsPassword(!isPassword);

  return (
    <div
      className={`w-full flex flex-col ${
        label || rightTop ? 'gap-2' : ''
      } ${className}`}
    >
      <div className='flex w-full justify-between'>
        {label && (
          <Typography variant='caption' className='text-indigo-50'>
            {label}
          </Typography>
        )}
        <span className=''>{rightTop}</span>
      </div>
      <div className={`relative flex items-center`}>
        {leftIcon && (
          <div className='absolute left-3 flex items-center justify-center w-8 h-8 rounded-full'>
            {leftIcon}
          </div>
        )}
        <input
          type={isPassword ? 'password' : 'text'}
          {...(value ? { value } : {})}
          {...(onChange ? { onChange } : {})}
          {...(placeholder ? { placeholder } : {})}
          className={`w-full px-4 py-2 border-[#1f2937] border-[1px] rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent  ${
            leftIcon ? 'pl-10' : ''
          } duration-300 ease-in-out`}
        />
        {type === 'password' && (
          <div
            onClick={togglePasswordVisibility}
            className='absolute inset-y-0 right-3 flex items-center pr-3 cursor-pointer'
          >
            {isPassword ? (
              <i className='ri-eye-line text-white' />
            ) : (
              <i className='ri-eye-off-line text-white' />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
