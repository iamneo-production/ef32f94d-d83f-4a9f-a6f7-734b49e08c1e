import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AddProduct from '../../components/admin/AddProduct/AddProduct';
import { MemoryRouter } from 'react-router-dom';


describe('Admin AddProduct Component', () => {

    const addProduct = render(<MemoryRouter><AddProduct /></MemoryRouter>);

    const addMedBody = screen.queryByTestId('addMedBody');
    const medName = screen.queryByTestId('medName');
    const medPrice = screen.queryByTestId('medPrice');
    const medDescription = screen.queryByTestId('medDescription');
    const medImageURL = screen.queryByTestId('medImageURL');
    const medQuantity = screen.queryByTestId('medQuantity')
    const addMedButton = screen.queryByTestId('addMedButton')

    test('feAdminAddProduct1', () => {
        expect(addMedBody).toBeTruthy();
        expect(medName).toBeTruthy();
        expect(medPrice).toBeTruthy();
        expect(medDescription).toBeTruthy();
        expect(medImageURL).toBeTruthy();
        expect(medQuantity).toBeTruthy();
        expect(addMedButton).toBeTruthy();  
        
        fireEvent.change(medName, {target : {value : 'testMedName'}})
        expect(medName.value).toBe('testMedName');

        fireEvent.change(medPrice, {target : {value : '5'}})
        expect(medPrice.value).toBe('5');

        fireEvent.change(medDescription, {target : {value : 'Med Description'}})
        expect(medDescription.value).toBe('Med Description');

        fireEvent.change(medImageURL, {target : {value : 'med URL'}})
        expect(medImageURL.value).toBe('med URL');

        fireEvent.change(medQuantity, {target : {value : '120'}})
        expect(medQuantity.value).toBe('120');
    })
 
})