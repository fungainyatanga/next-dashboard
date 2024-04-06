'use server';

export async function createInvoice(formData: FormData){

    const rawFormData  = {
        customerId: formData.get('customerId'),
        amount : formData.get('amount'),
        status: formData.get('status'),
    };

    //test it out 
    console.log(rawFormData);


}