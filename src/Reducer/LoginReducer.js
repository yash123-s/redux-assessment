// const initialState = {
//     name: "",
//     password: "",
//     nameError: "",
//     passwordError: ""
//   };
  
//   export default class ValiationForm extends React.Component {
//     state = initialState;
  
//     handleChange = event => {
//       const isCheckbox = event.target.type === "checkbox";
//       this.setState({
//         [event.target.name]: isCheckbox
//           ? event.target.checked
//           : event.target.value
//       });
//     };
  
//     validate = () => {
//       let nameError = "";
//       let passwordError = "";
  
//       if (!this.state.name) {
//         nameError = "name cannot be blank";
//       }
  
//       if (!this.state.password.includes("@|!|*|&")) {
//           passwordError = "invalid password, should include @/!/*/&";
//       }
  
//       if (passwordError || nameError) {
//         this.setState({ passwordError, nameError });
//         return false;
//       }
  
//       return true;
//     }
// }
