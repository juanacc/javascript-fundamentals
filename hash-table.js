const paymentTypes = {
    CREDITO: 'CREDITO',
    DEBITO: 'DEBITO',
    EFECTIVO: 'EFECTIVO',
  };
  
  const titlePaymentTypes = {
    CREDITO: 'Sobre cobrar con tarjeta de crédito',
    DEBITO: 'Sobre cobrar con tarjeta de débito',
    EFECTIVO: 'Sobre cobrar con efectivo',
  };
  
  const from='EFECTIVO';
  
  const summaryTitle = {
        [paymentTypes.CREDITO]: titlePaymentTypes.CREDITO,
        [paymentTypes.DEBITO]: titlePaymentTypes.DEBITO,
        [paymentTypes.EFECTIVO]: titlePaymentTypes.EFECTIVO
      };
  
  console.log(summaryTitle[from]);
  