import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handelChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value, id: uuidv4() });
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  handleSabmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    // console.log(this.state);
    this.props.onSubmit({ name, number, id: uuidv4() });
    this.resetForm();
  };

  render() {
    return (
      <>
        <div>
          <form
            className={style.form}
            autoComplete="off"
            onSubmit={this.handleSabmit}
          >
            <label className={style.label}>
              Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handelChange}
                className={style.input}
              />
            </label>
            <label className={style.label}>
              Number:
              <input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handelChange}
                className={style.input}
              />
            </label>
            <button type="submit" className={style.btn}>
              Add contact
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default ContactForm;
