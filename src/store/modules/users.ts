import { VuexModule, Module, getModule, MutationAction, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'
import { User, Profile, UserSubmit } from '../models';
import { loginUser } from '../api';

/**
 * generate dynamic module
 */
@Module({
    namespaced: true,
    name: 'users',
    store,
    dynamic: true
}) 

/**
 * new way of using vuex modules, defining the like typscript classes
 */
class UsersModule extends VuexModule {
  // user and profile objects, will allow you to visit individual profiles of any user
  user: User | null = null
  profile: Profile | null = null

  /**
   * here we create mutations actions: can mutate whatever we get from a response
   */
  @Mutation
  setUser(user: User) { this.user = user}

  get username() {
    return this.user && this.user.username || null
  }

  @Action({commit: 'setUser'})
  async login(userSubmit: UserSubmit) {
    const user = await loginUser(userSubmit)
    // console.log(`users.ts - 30 - variable`, user);
    return user 
  }
}

export default  getModule(UsersModule);