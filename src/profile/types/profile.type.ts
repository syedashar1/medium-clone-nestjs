import { UserType } from '@app/user/types/user.types';

export type ProfileType = UserType & { following: boolean };
