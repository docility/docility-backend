import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiCompanyQuestionnaireCompanyQuestionnaire
  extends Struct.CollectionTypeSchema {
  collectionName: 'company_questionnaires';
  info: {
    description: '';
    displayName: 'company-questionnaire';
    pluralName: 'company-questionnaires';
    singularName: 'company-questionnaire';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    company_id: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::company-questionnaire.company-questionnaire'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    questionnaire_id: Schema.Attribute.String;
    status: Schema.Attribute.String;
    supplier_id: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.UID;
  };
}

export interface ApiCompanyCompany extends Struct.CollectionTypeSchema {
  collectionName: 'companies';
  info: {
    description: '';
    displayName: 'company';
    pluralName: 'companies';
    singularName: 'company';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    acnNo: Schema.Attribute.String;
    address: Schema.Attribute.String;
    businessType: Schema.Attribute.String;
    city: Schema.Attribute.String;
    contactPerson: Schema.Attribute.String;
    country: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    domain: Schema.Attribute.String;
    email: Schema.Attribute.String;
    fileupload: Schema.Attribute.Relation<
      'oneToOne',
      'api::fileupload.fileupload'
    >;
    hasMultipleSites: Schema.Attribute.Text;
    information_asset_category: Schema.Attribute.Relation<
      'manyToOne',
      'api::information-asset-category.information-asset-category'
    >;
    informationSecurityProducts: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::company.company'
    > &
      Schema.Attribute.Private;
    moduleAssigned: Schema.Attribute.String;
    name: Schema.Attribute.String;
    organisationStructure: Schema.Attribute.String;
    phoneNo: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    risk_treatment: Schema.Attribute.Relation<
      'manyToOne',
      'api::risk-treatment.risk-treatment'
    >;
    state: Schema.Attribute.String;
    subscriptionAllocated: Schema.Attribute.String;
    taxNo: Schema.Attribute.String;
    timeZone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
    zipCode: Schema.Attribute.String;
  };
}

export interface ApiControlAssessmentControlAssessment
  extends Struct.CollectionTypeSchema {
  collectionName: 'control_assessments';
  info: {
    description: '';
    displayName: 'control_assessment';
    pluralName: 'control-assessments';
    singularName: 'control-assessment';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    annexControl: Schema.Attribute.String;
    controlDescription: Schema.Attribute.Text;
    controlHeading: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    domain: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::control-assessment.control-assessment'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiControlDomainControlDomain
  extends Struct.CollectionTypeSchema {
  collectionName: 'control_domains';
  info: {
    displayName: 'control_domain';
    pluralName: 'control-domains';
    singularName: 'control-domain';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    control_description: Schema.Attribute.String;
    control_no: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    domain: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::control-domain.control-domain'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCustomerCategoryCustomerCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'customer_categories';
  info: {
    displayName: 'customer_category';
    pluralName: 'customer-categories';
    singularName: 'customer-category';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    category: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::customer-category.customer-category'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCustomerManagementCustomerManagement
  extends Struct.CollectionTypeSchema {
  collectionName: 'customer_managements';
  info: {
    description: '';
    displayName: 'customer_management';
    pluralName: 'customer-managements';
    singularName: 'customer-management';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    abn_no: Schema.Attribute.String;
    acn_no: Schema.Attribute.String;
    address: Schema.Attribute.String;
    agreement: Schema.Attribute.String;
    alt_email: Schema.Attribute.String;
    alt_person_name: Schema.Attribute.String;
    alt_phone_no: Schema.Attribute.String;
    approval_status: Schema.Attribute.String;
    cia_impact: Schema.Attribute.String;
    company: Schema.Attribute.String;
    contact_person_name: Schema.Attribute.String;
    contract_commencement_date: Schema.Attribute.String;
    contract_end_date: Schema.Attribute.String;
    country: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    customer_category: Schema.Attribute.String;
    customer_type: Schema.Attribute.String;
    data_shared: Schema.Attribute.String;
    date_entered: Schema.Attribute.String;
    department_managing: Schema.Attribute.String;
    email: Schema.Attribute.String;
    glocal: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::customer-management.customer-management'
    > &
      Schema.Attribute.Private;
    manager: Schema.Attribute.String;
    name: Schema.Attribute.String;
    phone_no: Schema.Attribute.String;
    postal_code: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    state: Schema.Attribute.String;
    suburb: Schema.Attribute.String;
    trading_as: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    website: Schema.Attribute.String;
  };
}

export interface ApiFileuploadFileupload extends Struct.CollectionTypeSchema {
  collectionName: 'fileuploads';
  info: {
    description: '';
    displayName: 'fileupload';
    pluralName: 'fileuploads';
    singularName: 'fileupload';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    company: Schema.Attribute.Relation<'oneToOne', 'api::company.company'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fileupload.fileupload'
    > &
      Schema.Attribute.Private;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users_permissions_users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiInformationAssetCategoryInformationAssetCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'information_asset_categories';
  info: {
    description: '';
    displayName: 'information_asset_category';
    pluralName: 'information-asset-categories';
    singularName: 'information-asset-category';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    category: Schema.Attribute.String;
    categoryType: Schema.Attribute.String;
    companies: Schema.Attribute.Relation<'oneToMany', 'api::company.company'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::information-asset-category.information-asset-category'
    > &
      Schema.Attribute.Private;
    options: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiQuestionQuestion extends Struct.CollectionTypeSchema {
  collectionName: 'questions';
  info: {
    description: '';
    displayName: 'question';
    pluralName: 'questions';
    singularName: 'question';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::question.question'
    > &
      Schema.Attribute.Private;
    notes: Schema.Attribute.String;
    options: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    question: Schema.Attribute.String;
    questionnaires_id: Schema.Attribute.String;
    topic: Schema.Attribute.String;
    type: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiQuestionnaireAnswerQuestionnaireAnswer
  extends Struct.CollectionTypeSchema {
  collectionName: 'questionnaire_answers';
  info: {
    description: '';
    displayName: 'questionnaire_answer';
    pluralName: 'questionnaire-answers';
    singularName: 'questionnaire-answer';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    answer: Schema.Attribute.String;
    company_id: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::questionnaire-answer.questionnaire-answer'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    question_id: Schema.Attribute.String;
    questionnaire_id: Schema.Attribute.String;
    supplier_id: Schema.Attribute.String;
    type: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiQuestionnaireTopicQuestionnaireTopic
  extends Struct.CollectionTypeSchema {
  collectionName: 'questionnaire_topics';
  info: {
    description: '';
    displayName: 'questionnaire_topic';
    pluralName: 'questionnaire-topics';
    singularName: 'questionnaire-topic';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::questionnaire-topic.questionnaire-topic'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiQuestionnaireQuestionnaire
  extends Struct.CollectionTypeSchema {
  collectionName: 'questionnaires';
  info: {
    description: '';
    displayName: 'questionnaire';
    pluralName: 'questionnaires';
    singularName: 'questionnaire';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::questionnaire.questionnaire'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiResponsRespons extends Struct.CollectionTypeSchema {
  collectionName: 'responses';
  info: {
    displayName: 'respons';
    pluralName: 'responses';
    singularName: 'respons';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::respons.respons'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    question_id: Schema.Attribute.String;
    questionnaire_id: Schema.Attribute.String;
    respondent_id: Schema.Attribute.String;
    response: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRiskCategoryRiskCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'risk_categories';
  info: {
    description: '';
    displayName: 'risk_category';
    pluralName: 'risk-categories';
    singularName: 'risk-category';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    category_domain: Schema.Attribute.String;
    categoryType: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::risk-category.risk-category'
    > &
      Schema.Attribute.Private;
    options: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRiskOwnerRiskOwner extends Struct.CollectionTypeSchema {
  collectionName: 'risk_owners';
  info: {
    description: '';
    displayName: 'risk_owner';
    pluralName: 'risk-owners';
    singularName: 'risk-owner';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    company: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    department: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::risk-owner.risk-owner'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user_id: Schema.Attribute.String;
  };
}

export interface ApiRiskTreatmentRiskTreatment
  extends Struct.CollectionTypeSchema {
  collectionName: 'risk_treatments';
  info: {
    description: '';
    displayName: 'risk_treatment';
    pluralName: 'risk-treatments';
    singularName: 'risk-treatment';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    companies: Schema.Attribute.Relation<'oneToMany', 'api::company.company'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    file: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::risk-treatment.risk-treatment'
    > &
      Schema.Attribute.Private;
    options: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    treatmentOption: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whenToUse: Schema.Attribute.String;
  };
}

export interface ApiRiskRisk extends Struct.CollectionTypeSchema {
  collectionName: 'risks';
  info: {
    description: '';
    displayName: 'risk';
    pluralName: 'risks';
    singularName: 'risk';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    approvalEvidence: Schema.Attribute.String;
    assetCategory: Schema.Attribute.String;
    assetMainCategory: Schema.Attribute.String;
    assetSubCategory: Schema.Attribute.String;
    ciaImpact: Schema.Attribute.String;
    controlDomain: Schema.Attribute.String;
    controlMapped: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    currentControlEffective: Schema.Attribute.String;
    currentControlInPlace: Schema.Attribute.String;
    dateCreated: Schema.Attribute.String;
    initialImpact: Schema.Attribute.String;
    likelihood: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::risk.risk'> &
      Schema.Attribute.Private;
    matrix: Schema.Attribute.String;
    nextReviewDate: Schema.Attribute.String;
    notes: Schema.Attribute.String;
    personResponsibleToImplement: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    residualImpact: Schema.Attribute.String;
    residualLikelihood: Schema.Attribute.String;
    residualRiskApprovalFile: Schema.Attribute.String;
    residualRiskLevel: Schema.Attribute.String;
    residualTreatmentApprovalDate: Schema.Attribute.String;
    risidualImpact: Schema.Attribute.String;
    riskAcceptable: Schema.Attribute.String;
    riskApprovalDate: Schema.Attribute.String;
    riskApprovalEvidence: Schema.Attribute.String;
    riskApprovalFile: Schema.Attribute.String;
    riskAssessmentCompleted: Schema.Attribute.String;
    riskCategory: Schema.Attribute.String;
    riskControlDomain: Schema.Attribute.String;
    riskControlMap: Schema.Attribute.String;
    riskLevel: Schema.Attribute.String;
    riskOwner: Schema.Attribute.String;
    riskOwnerEmail: Schema.Attribute.String;
    riskTreatment: Schema.Attribute.String;
    riskTreatmentPlan: Schema.Attribute.String;
    threat: Schema.Attribute.String;
    treatmentApprovalDate: Schema.Attribute.String;
    treatmentApprovalEvidence: Schema.Attribute.String;
    treatmentApprovalEvidenceFile: Schema.Attribute.String;
    treatmentCompletionDate: Schema.Attribute.String;
    treatmentPlanFile: Schema.Attribute.String;
    treatmentStatus: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    vulnerability: Schema.Attribute.String;
  };
}

export interface ApiSubscriptionManagementSubscriptionManagement
  extends Struct.CollectionTypeSchema {
  collectionName: 'subscription_managements';
  info: {
    displayName: 'subscription-management';
    pluralName: 'subscription-managements';
    singularName: 'subscription-management';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    accessModule: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::subscription-management.subscription-management'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSupplierManagementSupplierManagement
  extends Struct.CollectionTypeSchema {
  collectionName: 'supplier_managements';
  info: {
    displayName: 'supplier-management';
    pluralName: 'supplier-managements';
    singularName: 'supplier-management';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    abn_no: Schema.Attribute.String;
    acn_no: Schema.Attribute.String;
    assessment_cia_impact: Schema.Attribute.String;
    assessment_due_date: Schema.Attribute.String;
    assessment_impact: Schema.Attribute.String;
    assessment_inherent_risl_level: Schema.Attribute.String;
    assessment_likelihood: Schema.Attribute.String;
    assessment_reviewer_person: Schema.Attribute.String;
    assessment_risk_assessment_matrix: Schema.Attribute.String;
    assessment_risk_completed: Schema.Attribute.String;
    assessment_status: Schema.Attribute.String;
    assessment_threat: Schema.Attribute.String;
    bank_account_name: Schema.Attribute.String;
    bank_account_no: Schema.Attribute.String;
    bank_bsb: Schema.Attribute.String;
    certification_iso_14001: Schema.Attribute.String;
    certification_iso_27001: Schema.Attribute.String;
    certification_iso_45001: Schema.Attribute.String;
    certification_iso_9001: Schema.Attribute.String;
    certification_modern_slavery_act: Schema.Attribute.String;
    contract_commencement_date: Schema.Attribute.String;
    contract_end_date: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    estimated_annual_budget: Schema.Attribute.String;
    exit_terms: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::supplier-management.supplier-management'
    > &
      Schema.Attribute.Private;
    modern_slavery_published_date: Schema.Attribute.String;
    other_certification: Schema.Attribute.String;
    other_certification_exists: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    sla_details: Schema.Attribute.String;
    supplier_24x7_contact_person_email: Schema.Attribute.String;
    supplier_24x7_contact_person_name: Schema.Attribute.String;
    supplier_24x7_contact_person_number: Schema.Attribute.String;
    supplier_address: Schema.Attribute.String;
    supplier_approval_status: Schema.Attribute.String;
    supplier_assessment_agreement: Schema.Attribute.String;
    supplier_assessment_required: Schema.Attribute.String;
    supplier_category: Schema.Attribute.String;
    supplier_contact_person_email: Schema.Attribute.String;
    supplier_contact_person_name: Schema.Attribute.String;
    supplier_contact_person_number: Schema.Attribute.String;
    supplier_country: Schema.Attribute.String;
    supplier_credit_limit: Schema.Attribute.String;
    supplier_data_shared: Schema.Attribute.String;
    supplier_date_entered: Schema.Attribute.String;
    supplier_decision_date: Schema.Attribute.String;
    supplier_department_managing: Schema.Attribute.String;
    supplier_glocal: Schema.Attribute.String;
    supplier_name: Schema.Attribute.String;
    supplier_ongoing_management: Schema.Attribute.String;
    supplier_owner: Schema.Attribute.String;
    supplier_payment_terms: Schema.Attribute.String;
    supplier_postal_code: Schema.Attribute.String;
    supplier_purpose: Schema.Attribute.String;
    supplier_sla_applicable: Schema.Attribute.String;
    supplier_special_condition_notes: Schema.Attribute.String;
    supplier_state: Schema.Attribute.String;
    supplier_suburb: Schema.Attribute.String;
    supplier_trading_as: Schema.Attribute.String;
    supplier_type: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    website: Schema.Attribute.String;
  };
}

export interface ApiSupplierSupplier extends Struct.CollectionTypeSchema {
  collectionName: 'suppliers';
  info: {
    displayName: 'supplier';
    pluralName: 'suppliers';
    singularName: 'supplier';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    abn_no: Schema.Attribute.String;
    acn_no: Schema.Attribute.String;
    assessment_cia_impact: Schema.Attribute.String;
    assessment_due_date: Schema.Attribute.String;
    assessment_impact: Schema.Attribute.String;
    assessment_inherent_risl_level: Schema.Attribute.String;
    assessment_likelihood: Schema.Attribute.String;
    assessment_reviewer_person: Schema.Attribute.String;
    assessment_risk_assessment_matrix: Schema.Attribute.String;
    assessment_risk_completed: Schema.Attribute.String;
    assessment_status: Schema.Attribute.String;
    assessment_threat: Schema.Attribute.String;
    bank_account_name: Schema.Attribute.String;
    bank_account_no: Schema.Attribute.String;
    bank_bsb: Schema.Attribute.String;
    certification_iso_14001: Schema.Attribute.String;
    certification_iso_27001: Schema.Attribute.String;
    certification_iso_45001: Schema.Attribute.String;
    certification_iso_9001: Schema.Attribute.String;
    certification_modern_slavery_act: Schema.Attribute.String;
    contract_commencement_date: Schema.Attribute.String;
    contract_end_date: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    estimated_annual_budget: Schema.Attribute.String;
    exit_terms: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::supplier.supplier'
    > &
      Schema.Attribute.Private;
    modern_slavery_published_date: Schema.Attribute.String;
    other_certification: Schema.Attribute.String;
    other_certification_exists: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    sla_details: Schema.Attribute.String;
    supplier_24x7_contact_person_email: Schema.Attribute.String;
    supplier_24x7_contact_person_name: Schema.Attribute.String;
    supplier_24x7_contact_person_number: Schema.Attribute.String;
    supplier_address: Schema.Attribute.String;
    supplier_approval_status: Schema.Attribute.String;
    supplier_assessment_agreement: Schema.Attribute.String;
    supplier_assessment_required: Schema.Attribute.String;
    supplier_category: Schema.Attribute.String;
    supplier_contact_person_email: Schema.Attribute.String;
    supplier_contact_person_name: Schema.Attribute.String;
    supplier_contact_person_number: Schema.Attribute.String;
    supplier_country: Schema.Attribute.String;
    supplier_credit_limit: Schema.Attribute.String;
    supplier_data_shared: Schema.Attribute.String;
    supplier_date_entered: Schema.Attribute.String;
    supplier_decision_date: Schema.Attribute.String;
    supplier_department_managing: Schema.Attribute.String;
    supplier_glocal: Schema.Attribute.String;
    supplier_id: Schema.Attribute.String;
    supplier_name: Schema.Attribute.String;
    supplier_ongoing_management: Schema.Attribute.String;
    supplier_owner: Schema.Attribute.String;
    supplier_payment_terms: Schema.Attribute.String;
    supplier_postal_code: Schema.Attribute.String;
    supplier_purpose: Schema.Attribute.String;
    supplier_sla_applicable: Schema.Attribute.String;
    supplier_special_condition_notes: Schema.Attribute.String;
    supplier_state: Schema.Attribute.String;
    supplier_suburb: Schema.Attribute.String;
    supplier_trading_as: Schema.Attribute.String;
    supplier_type: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    website: Schema.Attribute.String;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::company-questionnaire.company-questionnaire': ApiCompanyQuestionnaireCompanyQuestionnaire;
      'api::company.company': ApiCompanyCompany;
      'api::control-assessment.control-assessment': ApiControlAssessmentControlAssessment;
      'api::control-domain.control-domain': ApiControlDomainControlDomain;
      'api::customer-category.customer-category': ApiCustomerCategoryCustomerCategory;
      'api::customer-management.customer-management': ApiCustomerManagementCustomerManagement;
      'api::fileupload.fileupload': ApiFileuploadFileupload;
      'api::information-asset-category.information-asset-category': ApiInformationAssetCategoryInformationAssetCategory;
      'api::question.question': ApiQuestionQuestion;
      'api::questionnaire-answer.questionnaire-answer': ApiQuestionnaireAnswerQuestionnaireAnswer;
      'api::questionnaire-topic.questionnaire-topic': ApiQuestionnaireTopicQuestionnaireTopic;
      'api::questionnaire.questionnaire': ApiQuestionnaireQuestionnaire;
      'api::respons.respons': ApiResponsRespons;
      'api::risk-category.risk-category': ApiRiskCategoryRiskCategory;
      'api::risk-owner.risk-owner': ApiRiskOwnerRiskOwner;
      'api::risk-treatment.risk-treatment': ApiRiskTreatmentRiskTreatment;
      'api::risk.risk': ApiRiskRisk;
      'api::subscription-management.subscription-management': ApiSubscriptionManagementSubscriptionManagement;
      'api::supplier-management.supplier-management': ApiSupplierManagementSupplierManagement;
      'api::supplier.supplier': ApiSupplierSupplier;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
