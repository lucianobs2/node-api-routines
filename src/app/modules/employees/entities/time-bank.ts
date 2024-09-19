import { randomUUID } from 'node:crypto';
import { Replace } from '../helpers/Replace';

export interface TimeBankProps {
  employeeId: string;
  createdAt?: Date;
  updatedAt?: Date | null;
}

export class TimeBank {
  private _id: string;
  private props: TimeBankProps;

  constructor(
    props: Replace<TimeBankProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? null,
    };
  }

  public get id() {
    return this._id;
  }

  public get employeeId() {
    return this.props.employeeId;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }

  public updated() {
    this.props.updatedAt = new Date();
  }
}
