import React from 'react';
import { connect } from 'react-redux';
import { saveCourse, fetchCourse } from '../actions/courses';

import FlatButton from 'material-ui/FlatButton';

import IngredientsInputList from '../components/courses/course-edit/ingredients-input';

class AddCoursePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.item,
      error: {
        name: '',
      },
      ingredientsList: this.props.ingredients
       // .filter(ing => this.props.item.ingredients.findIndex(i2 => i2.id === ing.id) > -1),
    }
    
  }

  componentDidUpdate() {
    if (this.props.item.id && !this.state.id) {
      this.setState({
        ...this.props.item
      });
    }

  }

  onChangeName = (name) => {
    this.setState({
      course: {
        ...this.state.course,
        name,
      }
    })
  }

  // onChangeIng = (ingredient, value) => {
  //   const ingredients = [...this.state.course.ingredients];
  //   const index = ingredients.findIndex(ing => ing.name === ingredient.name);
  //   ingredients[index] = {
  //     ...ingredients[index],
  //     ...value
  //   }
  //   this.setState({
  //     course: {
  //       ...this.state.course,
  //       ingredients,
  //     }
  //   })
  // }

  addIngredient = () => {
    this.setState({
      ingredients: [...this.state.ingredients, {id: '', value: 0}]
    })
  }

  onChangeIng = (id, newId) => {
    this.updateIngredients(id, {id: newId});
  }

  onChangeIngVal = (id, value) => {
    this.updateIngredients(id, {value: +value});
  }

  updateIngredients(id, ingredient) {
    const ingredients = this.state.ingredients.map(ing => {
      if (ing.id !== id) {
        return ing;
      }
      return {
        ...ing,
        ...ingredient
      }
    })
    this.setState({ingredients});
  }

  onDeleteIng = () => {
    console.log('delete');
  }

  submit = () => {
    this.props.saveCourse(this.state.course)
      .then(t => this.props.returnToList());
  }

  render() {
    const {
      name,
      ingredients: courseIngredients,
    } = this.state;
    return (
      <div>
        <form>
          <div>
            <label htmlFor="name">שם</label>
            <input name="name" value={name || ''} onChange={(e) => this.onChangeName(e.target.value)} />
          </div>
          <div>
            <h2>רכיבים</h2>
            <FlatButton onClick={this.addIngredient}>הוסף רכיב</FlatButton>
            <IngredientsInputList 
              ingredients={this.props.ingredients} 
              courseIngredients={courseIngredients} 
              onChangeIngredient={this.onChangeIng} 
              onChangeIngredientValue={this.onChangeIngVal}
              onDelete={this.onDeleteIng}/>
          </div>
          <FlatButton onClick={this.submit}>שמור</FlatButton>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let item = (ownProps.id) && state.entities['courses'][ownProps.id];
  item = Object.assign({}, { name: '', ingredients: [] }, item);
  console.log(state);
  return {
    item,
    ingredients: state.ingredients.items.map(id => state.entities.ingredients[id])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveCourse: (course) => { //async
    return dispatch(saveCourse(course));
  },
  returnToList: () => {
    ownProps.push('/courses');
  },
  fetchCourse: () => {
    return dispatch(fetchCourse(ownProps.id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCoursePage);