import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { UserInterface } from '../interfaces/user.interface';
//import { IsEmail, Min } from 'src/common/decorators/validations';
import { hash } from 'bcrypt';

@Entity()
@Unique(['username'])
export class User implements UserInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  //@Min(8)
  password: string;

  @Column()
  name: string;

  @Column()
  //@IsEmail()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}
