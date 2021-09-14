import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

    render() {
        const { todos, onToggle, onRemove } = this.props;

        // 객체 배열을 컴포넌트 배열로 변환
        const todoList = todos.map(
            ({ id, text, checked, color }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    color={color}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;