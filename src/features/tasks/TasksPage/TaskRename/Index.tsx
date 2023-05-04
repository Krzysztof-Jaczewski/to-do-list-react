import { FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cancelRenameTask, acceptRenameTask } from '../../tasksSlice';
import { TextRenameForm } from './styled';
import { Input } from '../../../../common/Input';
import { ListButton } from '../TasksListButtons';
import { TaskType } from 'src/ts/types';

interface Props {
    task: TaskType;
}

export const TaskRename = ({ task }: Props) => {
    const [newTaskContent, setNewTaskContent] = useState('');
    const dispatch = useDispatch();
    const inputFocus = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputFocus.current?.focus();
    }, [task.isCurrentlyRename]);

    const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setNewTaskContent('');
    };

    return (
        <TextRenameForm
            isHide={!task.isCurrentlyRename}
            onSubmit={onFormSubmit}
        >
            <Input
                value={newTaskContent}
                ref={inputFocus}
                onFocus={() => setNewTaskContent('')}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <ListButton
                type='submit'
                title='Zatwierdź zmianę'
                onClick={() => {
                    if (newTaskContent === '')
                        dispatch(cancelRenameTask(task.id));
                    else
                        dispatch(
                            acceptRenameTask({
                                content: newTaskContent,
                                isDone: false,
                                isCurrentlyRename: false,
                                id: task.id,
                            })
                        );
                }}
            >
                ✔
            </ListButton>
            <ListButton
                remove
                type='button'
                title='Anuluj zmianę'
                onClick={() => dispatch(cancelRenameTask(task.id))}
            >
                X
            </ListButton>
        </TextRenameForm>
    );
};
