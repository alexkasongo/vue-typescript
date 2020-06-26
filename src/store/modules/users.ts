import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'
import { User, Profile, UserSubmit, UserForUpdate } from '../models';
import { loginUser, fetchProfile } from '../api';

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
  // State
  user: User | null = null
  profile: Profile | null = null

  /**
   * here we create mutations actions: can mutate whatever we get from a response
   */
  @Mutation
  setUser(user: User) { 
    this.user = user
  }
  @Mutation
  setProfile(profile: Profile) {
    this.profile = profile
  }

  // @Mutation
  // async updateSelfProfile(userUpdateFields: UserForUpdate) {
  //   const user = await updateUser(userUpdateFields)
  //   return { user }
  // }

  /**
   * Getters
   */

  get username() {
    return this.user
  }

  /**
   * Actions
   */

  @Action({commit: 'setUser'})
  async login(userSubmit: UserSubmit) {
      const user = await loginUser(userSubmit)
      // setJWT(user.token)
      return user 
  }
  
  @Action({commit: 'setProfile'})
  async loadProfile(username: string) {
    const profile = await fetchProfile(username)
    return profile
  }
}

export default  getModule(UsersModule);