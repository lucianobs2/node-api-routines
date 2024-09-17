import { randomUUID } from 'node:crypto';
import { Replace } from '../helpers/Replace';

export interface UserProps {
  name: string;
  surname: string;
  email: string;
  avatarUrl?: string | undefined | null;
  updatedAt?: Date | null;
  createdAt?: Date | null;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(
    props: Replace<UserProps, { createdAt?: Date; updatedAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      avatarUrl: props.avatarUrl ?? null,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? null,
    };
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this.props.name;
  }

  public get surname() {
    return this.props.surname;
  }

  public get email() {
    return this.props.email;
  }

  public get avatarUrl() {
    return this.props.avatarUrl;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }

  public set Name(name: string) {
    this.props.name = name;
  }

  public set Surname(surname: string) {
    this.props.surname = surname;
  }

  public set Email(email: string) {
    this.props.email = email;
  }

  public set AvatarUrl(avatarUrl: string) {
    this.props.avatarUrl = avatarUrl;
  }

  public updated() {
    this.props.updatedAt = new Date();
  }
}
