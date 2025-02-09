import { User } from './user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private usersService;
    constructor(usersService: UserService);
    findAll(): Promise<User[]>;
    createRecord(user: User): Promise<User>;
}
