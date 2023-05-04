import { nanoid } from '@reduxjs/toolkit';
import { FormEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../../../../common/Input';
import { addTask } from '../../tasksSlice';
import { StyledForm, Button } from './styled';

export const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState('');
    const textFocus = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newTaskContent.trim() === '') return;

        dispatch(
            addTask({
                content: newTaskContent,
                isDone: false,
                isCurrentlyRename: false,
                id: nanoid(),
            })
        );
        setNewTaskContent('');

        textFocus.current?.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                ref={textFocus}
                type='text'
                placeholder='Co jest do zrobienia?'
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};
