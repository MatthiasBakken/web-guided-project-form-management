import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
// const initialPetsList = [
//   { petName: 'Fido', petType: 'dog' },
//   { petName: 'Tweetie', petType: 'canary' },
//   { petName: 'Goldie', petType: 'fish' },
// ]

// const initialFormValues = { petName: '', petType: '' };

// function SimpleForm () {
//   const [ pets, setPets ] = useState( initialPetsList );
//   const [ formValues, setFormValues ] = useState( initialFormValues );

//   const change = (evt) => {
//     const { name, value } = evt.target;
//     setFormValues({...formValues, [name]: value})
//   }

//   const submit = evt => {
//     evt.preventDefault();
    
//     const newPet = {
//       petName: formValues.petName,
//       petType: formValues.petType,
//     };
//     setPets( [ ...pets, newPet ] );

//     setFormValues( initialFormValues );
//   };

//   // show all pet names and types we have so far
//   return (
//     <div>
//       {pets.map( pet => {
//         return (
//           <div key={pet.petName}>
//             <p>{pet.petName}</p>
//             <p>{pet.petType}</p>
//           </div>
//         );
//       } )}
//       <form onSubmit={submit} >
//         <input type="text" name="petName" value={formValues.petName} onChange={change} />
//         <input type="text" name="petType" value={formValues.petType} onChange={change} />
//         <button type-="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

render(
  <>
    {/* <SimpleForm /> */}
    <App />
  </>
  , document.querySelector('#root')
)
