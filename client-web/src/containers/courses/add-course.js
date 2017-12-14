import React from 'react';
import { connect } from 'react-redux';
import { addOrUpdateItem, fetchCourse } from '../../actions/courses';

import { FlatButton, TextField } from 'material-ui';

import IngredientsInputList from '../../components/courses/course-edit/ingredients-input';
import AutoCompleteInput from '../../components/auto-complete-input';

class AddCoursePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.item,
      error: {
        name: '',
      },
      ingredientsList: this.props.ingredients,
    };
  }

  componentDidUpdate() {
    if (this.props.item._id && !this.state._id) {
      this.setState({
        ...this.props.item,
      });
    }
  }

  onChangeName = name => {
    this.setState({ name });
  };

  addIngredient = listOfIng => {
    this.setState({
      ingredients: [...this.state.ingredients, ...listOfIng],
    });
  };

  onChangeIng = (id, newId) => {
    this.updateIngredients(id, { _id: newId });
  };

  onChangeIngVal = (id, value) => {
    this.updateIngredients(id, { value: +value });
  };

  updateIngredients(id, ingredient) {
    const ingredients = this.state.ingredients.map(ing => {
      if (ing._id !== id) {
        return ing;
      }
      return {
        ...ing,
        ...ingredient,
      };
    });
    this.setState({ ingredients });
  }

  onDeleteIng = id => {
    const ingredients = this.state.ingredients.filter(ing => ing._id !== id);
    this.setState({ ingredients });
  };

  submit = e => {
    e.preventDefault();
    const { name, description, ingredients, _id } = this.state;
    if (!name) {
      this.setState({ error: { name: 'חובה למלא שדה זה' } });
      return false;
    }
    this.props
      .saveCourse({ name, description, ingredients, _id })
      .then(t => this.props.returnToList());
  };

  render() {
    const { name, description, ingredients: courseIngredients } = this.state;
    return (
      <div>
        <div>
          <AutoCompleteInput
            add={this.addIngredient}
            list={this.props.ingredients}
          />
        </div>

        <form onSubmit={this.submit}>
          <div>
            <TextField
              floatingLabelText="שם"
              value={name || ''}
              onChange={(_, name) => this.onChangeName(name)}
              id="course-name"
              errorText={this.state.error.name}
            />
          </div>
          <div>
            <TextField
              multiLine
              id="course-description"
              value={description || ''}
              onChange={(_, description) => this.setState({ description })}
              floatingLabelText="תיאור"
            />
          </div>
          <div>
            <h2>רכיבים</h2>
            <FlatButton onClick={this.addIngredient}>הוסף רכיב</FlatButton>
            <IngredientsInputList
              ingredients={this.props.ingredients}
              courseIngredients={courseIngredients}
              onChangeIngredient={this.onChangeIng}
              onChangeIngredientValue={this.onChangeIngVal}
              onDelete={this.onDeleteIng}
            />
          </div>

          <FlatButton onClick={this.submit}>שמור</FlatButton>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let item = ownProps.id && state.entities['courses'][ownProps.id];
  item = Object.assign({}, { name: '', ingredients: [] }, item);
  return {
    item,
    ingredients: state.ingredients.items.map(
      id => state.entities.ingredients[id]
    ),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveCourse: course => {
    //async
    return dispatch(addOrUpdateItem(course));
  },
  returnToList: () => {
    ownProps.push('/courses');
  },
  fetchCourse: () => {
    return dispatch(fetchCourse(ownProps.id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCoursePage);
