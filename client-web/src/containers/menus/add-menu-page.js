import React from 'react';
import { connect } from 'react-redux';
import { addOrUpdateItem, fetchItem } from '../../actions/menus';

import { FlatButton, TextField } from 'material-ui';

import CoursesInputList from '../../components/common/sub-item-input-list';

class AddMenuPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.item,
      error: {
        name: '',
      },
      // ingredientsList: this.props.ingredients
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

  addCourse = () => {
    this.setState({
      courses: [...this.state.courses, { _id: '', value: 0 }],
    });
  };

  onChangeCourse = (id, newId) => {
    this.updateCourses(id, { _id: newId });
  };

  onChangeCourseValue = (id, value) => {
    if (value < 0) {
      return;
    }
    this.updateCourses(id, { value: +value });
  };

  updateCourses(id, ingredient) {
    const courses = this.state.courses.map(ing => {
      if (ing._id !== id) {
        return ing;
      }
      return {
        ...ing,
        ...ingredient,
      };
    });
    this.setState({ courses });
  }

  onDeleteCourse = id => {
    const courses = this.state.courses.filter(ing => ing._id !== id);
    this.setState({ courses });
  };

  submit = e => {
    e.preventDefault();
    const { name, description, courses, _id } = this.state;
    if (!name) {
      this.setState({ error: { name: 'חובה למלא שדה זה' } });
      return false;
    }
    this.props
      .saveItem({ name, description, courses, _id })
      .then(t => this.props.returnToList());
  };

  render() {
    const { name, description, courses } = this.state;
    return (
      <div>
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
            <h2>מנות</h2>
            <FlatButton onClick={this.addCourse}>הוסף מנה</FlatButton>
            <CoursesInputList
              subItems={this.props.courses}
              selectedSubItems={courses}
              onChangeSubItem={this.onChangeCourse}
              onChangeSubItemValue={this.onChangeCourseValue}
              onDelete={this.onDeleteCourse}
            />
          </div>
          <FlatButton onClick={this.submit}>שמור</FlatButton>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let item = ownProps.id && state.entities.menus[ownProps.id];
  item = Object.assign({}, { name: '', courses: [] }, item);
  return {
    item,
    courses: state.courses.items.map(id => state.entities.courses[id]),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveItem: item => {
    //async
    return dispatch(addOrUpdateItem(item));
  },
  returnToList: () => {
    ownProps.push('/menus');
  },
  fetchCourse: () => {
    return dispatch(fetchItem(ownProps.id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMenuPage);
