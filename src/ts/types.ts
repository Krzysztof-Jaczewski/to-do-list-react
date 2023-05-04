export interface HideTaskProps {
    isHide?: boolean;
}

export interface TaskType {
    id: string;
    content: string;
    isDone: boolean;
    isCurrentlyRename?: boolean;
}
