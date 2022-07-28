import { ReactNode } from 'react';
// form
import { FieldValues, FormProvider as Form, UseFormReturn } from 'react-hook-form';

export default function FormProvider({
  children,
  onSubmit,
  methods,
}: {
  children: ReactNode;
  onSubmit: () => void;
  methods: UseFormReturn<FieldValues, object>;
}) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
