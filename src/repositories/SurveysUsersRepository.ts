import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/SurveyUser";

@EntityRepository(SurveyUser)
class SurveyrsUsersRepository extends Repository<SurveyUser> {}

export { SurveyrsUsersRepository }