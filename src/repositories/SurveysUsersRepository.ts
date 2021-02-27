import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/SurveyUser";

@EntityRepository(SurveyUser)
class SurversUsersRepository extends Repository<SurveyUser> {}

export { SurversUsersRepository }