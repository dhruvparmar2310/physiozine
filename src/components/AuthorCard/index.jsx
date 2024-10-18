import React from 'react'
import { Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';

const AuthorCard = ({ control, index, errors }) => {
    return (
        <div className="author-card mb-3 p-3 border rounded">
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Controller
                    name={`authors[${index}].name`}
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Name is required' }}
                    render={({ field }) => (
                        <Form.Control {...field} placeholder="Enter author name" />
                    )}
                />
                {errors?.authors?.[index]?.name && (
                    <span className='d-block text-danger text-end'>{errors.authors[index].name.message}</span>
                )}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Designation</Form.Label>
                <Controller
                    name={`authors[${index}].designation`}
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Form.Control {...field} placeholder="Enter designation" />
                    )}
                />
                {errors?.authors?.[index]?.designation && (
                    <span className='d-block text-danger text-end'>{errors.authors[index].designation.message}</span>
                )}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Controller
                    name={`authors[${index}].mobileNumber`}
                    control={control}
                    defaultValue=""
                    rules={{ pattern: { value: /^\d{10}$/, message: 'Invalid mobile number' } }}
                    render={({ field }) => (
                        <Form.Control {...field} placeholder="Enter mobile number" maxLength={10} />
                    )}
                />
                {errors?.authors?.[index]?.mobileNumber && (
                    <span className='d-block text-danger text-end'>{errors.authors[index].mobileNumber.message}</span>
                )}
            </Form.Group>
        </div>
    );
};

export default AuthorCard