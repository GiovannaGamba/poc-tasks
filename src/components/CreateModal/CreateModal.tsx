import React, { useState } from 'react';
import { Typography } from '../Typography/Typhography';
import { ButtonTeste } from '../ButtonTeste/ButtonTeste';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';

export interface CreateModalField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'select';
  options?: string[];
  required?: boolean;
  placeholder?: string;
}

export interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Record<string, any>) => void;
  title: string;
  fields: CreateModalField[];
  isLoading?: boolean;
}

export function CreateModal({
  isOpen,
  onClose,
  onSubmit,
  title,
  fields,
  isLoading = false,
}: CreateModalProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (name: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClose = () => {
    setFormData({});
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <Typography component="h2" variant="title-1" className="mb-6">
          {title}
        </Typography>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              
              {field.type === 'select' ? (
                <Select
                  value={formData[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  options={field.options?.map(opt => ({ value: opt, label: opt })) || []}
                  placeholder={field.placeholder || `Selecione ${field.label.toLowerCase()}`}
                />
              ) : (
                <Input
                  type={field.type}
                  value={formData[field.name] || ''}
                  onChange={(e) => {
                    const value = field.type === 'number' ? Number(e.target.value) : e.target.value;
                    handleChange(field.name, value);
                  }}
                  placeholder={field.placeholder || `Digite ${field.label.toLowerCase()}`}
                />
              )}
            </div>
          ))}
          
          <div className="flex gap-3 pt-4">
            <ButtonTeste
              type="primary"
              style="outlined"
              state="enabled"
              onClick={handleClose}
              className="flex-1"
            >
              Cancelar
            </ButtonTeste>
            <ButtonTeste
              type="primary"
              style="filled"
              state={isLoading ? "disabled" : "enabled"}
              className="flex-1"
            >
              {isLoading ? 'Criando...' : 'Criar'}
            </ButtonTeste>
          </div>
        </form>
      </div>
    </div>
  );
}
