import Vector from './Form.png';
import './Form.css';
import Title from '../CommonPages/Title/Title';


const Form = () => {
    const transferDataToServer = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const supplier = event.target.supplier.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const url = event.target.url.value;
        const description = event.target.description.value;
        const info = { name, supplier, price, quantity, url, description };
        event.target.reset()

        fetch('http://localhost:5000/inventory', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(data => console.log(data))
    }
    return (
        <div className='form-body'>
            <Title title='Add Item'></Title>
            <div className='form-container bg-white'>
                <div className='form-vector'>
                    <img src={Vector}></img>
                </div>
                <div className='form-info'>
                    <h3 className='mb-3'>Add Information</h3>
                    <form onSubmit={transferDataToServer}>
                        <div className='input-div'>
                            <div>
                                <label>Name</label><br />
                                <input className='mb-2 border border-2 p-1 fw-bold rounded-3 w-100' type='text' name='name'></input>
                            </div>
                            <div>
                                <label>Supplier</label><br />
                                <input className='mb-2 border border-2 p-1 fw-bold rounded-3 w-100' type='text' name='supplier'></input><br />
                            </div>
                        </div>
                        <div className='input-div'>
                            <div>
                                <label>Price</label><br />
                                <input className='mb-2 border border-2 p-1 fw-bold rounded-3 w-100' type='number' name='price'></input><br />
                            </div>
                            <div>
                                <label>Quantity</label><br />
                                <input className='mb-2 border border-2 p-1 fw-bold rounded-3 w-100' type='number' name='quantity'></input><br />
                            </div>
                        </div>
                        <label>Photo URL</label><br />
                        <input className='mb-2 border border-2 p-1 fw-bold rounded-3 w-100' type='text' name='url'></input><br />
                        <label>Description</label><br />
                        <textarea className='mb-2 border border-2 p-1 fw-bold rounded-3 w-100' name='description'></textarea><br />
                        <input className='submit-btn' type='submit' value='Submit'></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;