export interface UserData {
  userChapters: Chapter[];
}
export interface ChapterTask {
  content: string;
  completed: boolean;
}

export interface Chapter {
  title?: string;
  id: string;
  tasks: ChapterTask[];
}

export const UserDummyData: UserData = {
  userChapters: [],
};
