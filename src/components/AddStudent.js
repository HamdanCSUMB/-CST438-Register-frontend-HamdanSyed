import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// user selects from a list of  (year, semester) values
class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false, student: { studentEmail: "", studentName: "", studentStatus: null } };
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleNameChange = (event) => {
        this.setState({
            student: { studentEmail: this.state.student.studentEmail, studentName: event.target.value, studentStatus: this.state.student.studentStatus },
        });
    }

    handleEmailChange = (event) => {
        this.setState({
            student: { studentEmail: event.target.value, studentName: this.state.student.studentName, studentStatus: this.state.student.studentStatus },
        });
    }

    // Save course and close modal form
    handleAdd = () => {
        this.props.addStudent(this.state.student);
        this.handleClose();
    }

    render() {
        return (
            <div>
                <Button id="AddStudentButton" variant="outlined" color="primary" style={{ margin: 10 }} onClick={this.handleClickOpen}>
                    Add Student
                </Button>
                <Dialog id="AddStudentDialog" open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Add Student</DialogTitle>
                    <DialogContent style={{ paddingTop: 20 }} >
                        <TextField autoFocus fullWidth label="Name" name="studentName" onChange={this.handleNameChange} />
                        <br />
                        <TextField autoFocus fullWidth label="Email" name="studentEmail" onChange={this.handleEmailChange} />
                    </DialogContent>
                    <DialogActions>
                        <Button id="Cancel" color="secondary" onClick={this.handleClose}>Cancel</Button>
                        <Button id="Add" color="primary" onClick={this.handleAdd}>Add</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

AddStudent.propTypes = {
    addStudent: PropTypes.func.isRequired
}

export default AddStudent;