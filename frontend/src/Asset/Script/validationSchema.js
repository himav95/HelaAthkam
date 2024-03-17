// for data validation - yup.
import * as Yup from 'yup';

// Common validation schemas for shared form fields.
const commonValidations = {
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters.').required('Password is required'),
    name: Yup.string().required('Name is required'),
    phoneNumber: Yup.string().matches(/^(?:\+?94|0)?(?:\d{9}|\d{10})$/,'Invalid phone number').required('Phone number is required'),
    productName: Yup.string().required('Product name is required'),
    productCategory: Yup.string().required('Product Category is required'),
    quantity: Yup.number().integer().min(1, 'Quantity must be at leaset 1').required('Quantity is required'),
    deliveryDate: Yup.date().min(new date, 'Delivery date must be in the future').required('Delivery date is required'),
    
};



// below : Validatiion schemas for each specific forms in hela athkam.


// Validation schema for sign up form.
export const signUpSchema = Yup.object().shape( {
    // spread common validations coded above, here.
    ...commonValidations,
    fullName: Yup.string().required('Full name is required.'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm password.'),

});



// Validation schema for login form.
export const loginSchema = Yup.object().shape( {
    // spread common validations coded above, here.
    ...commonValidations,

});



// Validation schema for basic order form.
export const basicOrderSchema = Yup.object().shape( {
    // spread common validations coded above, here.
    ...commonValidations,

    // Basic order form validation schema specifications.
    radioOption: Yup.string().required('Please select an option'),
});



// Validation schema for special edition order form.
export const editionSchema = Yup.object().shape( {
    // spread common validations coded above, here.
    ...commonValidations,
});




// Validation schema for custom order form.
export const customSchema = Yup.object().shape( {
    // spread common validations coded above, here.
    ...commonValidations,

    // Custom order form validation schema specifications.
    textareaField: Yup.string().required('Description is required'),

    imageUpload: Yup.mixed().required('Image/sketch is required').test('fileFormat', 'Unsupported file format', (value) => {
        if (!value) return true; // allow empty value, as it's not required to have an image.
        return value && ['image/jpeg', 'image/png', 'image/gif'].includes(value,type);
    } ),
});





// Validation schema for join us form.
export const joinusSchema = Yup.object().shape( {
    // spread common validations coded above, here.
    ...commonValidations,

    // Join us form validation schema specifications.
    nic: Yup.string().matches(/^[0-9]{9}[vVxX]$/, 'Invalid NIC').required('NIC is required.'),
    address: Yup.string().required('Address is required.'),
    textareaField: Yup.string().required('Product description is required.'),
    imageUpload: Yup.array()
    .min(1, 'At least one image is required.')
    .max(5, 'Maximum of 5 images allowed.')
    .of(
        Yup.mixed().test(
            'fileFormat', 'Unsupported file format',
            (value) => value && ['image/jpeg', 'image/png', 'image/gif'].includes(value,type)
        )
    )
    .required('Image uploads are required.'),

});





// Validation schema for contact form.
export const contactSchema = Yup.object().shape( {
    // spread common validations coded above, here.
    ...commonValidations,

    // Contact form validation schema specifications.
    subject: Yup.string().required('Subject is required.'),
    inquiry: Yup.string().required('Inquirey is needed.'),
});




