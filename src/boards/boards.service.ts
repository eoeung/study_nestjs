import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  getBoard(): string {
    return 'boards';
  }
}
