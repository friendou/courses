import { ITextbook } from './ITextbook';

export interface ICourse {
    id: number;
    name: string;
    description: string;
    textbooks: ITextbook[];
}
