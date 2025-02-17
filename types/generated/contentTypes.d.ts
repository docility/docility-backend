import type { Schema, Attribute } from '@strapi/strapi'

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions'
  info: {
    name: 'Permission'
    description: ''
    singularName: 'permission'
    pluralName: 'permissions'
    displayName: 'Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    properties: Attribute.JSON & Attribute.DefaultTo<{}>
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'admin::permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users'
  info: {
    name: 'User'
    description: ''
    singularName: 'user'
    pluralName: 'users'
    displayName: 'User'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    username: Attribute.String
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: Attribute.String & Attribute.Private
    registrationToken: Attribute.String & Attribute.Private
    isActive: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> & Attribute.Private
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    preferedLanguage: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles'
  info: {
    name: 'Role'
    description: ''
    singularName: 'role'
    pluralName: 'roles'
    displayName: 'Role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    description: Attribute.String
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>
    permissions: Attribute.Relation<'admin::role', 'oneToMany', 'admin::permission'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens'
  info: {
    name: 'Api Token'
    singularName: 'api-token'
    pluralName: 'api-tokens'
    displayName: 'Api Token'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }> &
      Attribute.DefaultTo<''>
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    lastUsedAt: Attribute.DateTime
    permissions: Attribute.Relation<'admin::api-token', 'oneToMany', 'admin::api-token-permission'>
    expiresAt: Attribute.DateTime
    lifespan: Attribute.BigInteger
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::api-token', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'admin::api-token', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions'
  info: {
    name: 'API Token Permission'
    description: ''
    singularName: 'api-token-permission'
    pluralName: 'api-token-permissions'
    displayName: 'API Token Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    token: Attribute.Relation<'admin::api-token-permission', 'manyToOne', 'admin::api-token'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::api-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'admin::api-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens'
  info: {
    name: 'Transfer Token'
    singularName: 'transfer-token'
    pluralName: 'transfer-tokens'
    displayName: 'Transfer Token'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }> &
      Attribute.DefaultTo<''>
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    lastUsedAt: Attribute.DateTime
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >
    expiresAt: Attribute.DateTime
    lifespan: Attribute.BigInteger
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::transfer-token', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'admin::transfer-token', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions'
  info: {
    name: 'Transfer Token Permission'
    description: ''
    singularName: 'transfer-token-permission'
    pluralName: 'transfer-token-permissions'
    displayName: 'Transfer Token Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::transfer-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'admin::transfer-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files'
  info: {
    singularName: 'file'
    pluralName: 'files'
    displayName: 'File'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String & Attribute.Required
    alternativeText: Attribute.String
    caption: Attribute.String
    width: Attribute.Integer
    height: Attribute.Integer
    formats: Attribute.JSON
    hash: Attribute.String & Attribute.Required
    ext: Attribute.String
    mime: Attribute.String & Attribute.Required
    size: Attribute.Decimal & Attribute.Required
    url: Attribute.String & Attribute.Required
    previewUrl: Attribute.String
    provider: Attribute.String & Attribute.Required
    provider_metadata: Attribute.JSON
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>
    folder: Attribute.Relation<'plugin::upload.file', 'manyToOne', 'plugin::upload.folder'> &
      Attribute.Private
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::upload.file', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::upload.file', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders'
  info: {
    singularName: 'folder'
    pluralName: 'folders'
    displayName: 'Folder'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique
    parent: Attribute.Relation<'plugin::upload.folder', 'manyToOne', 'plugin::upload.folder'>
    children: Attribute.Relation<'plugin::upload.folder', 'oneToMany', 'plugin::upload.folder'>
    files: Attribute.Relation<'plugin::upload.folder', 'oneToMany', 'plugin::upload.file'>
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::upload.folder', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::upload.folder', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases'
  info: {
    singularName: 'release'
    pluralName: 'releases'
    displayName: 'Release'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String & Attribute.Required
    releasedAt: Attribute.DateTime
    scheduledAt: Attribute.DateTime
    timezone: Attribute.String
    status: Attribute.Enumeration<['ready', 'blocked', 'failed', 'done', 'empty']> &
      Attribute.Required
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::content-releases.release', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::content-releases.release', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginContentReleasesReleaseAction extends Schema.CollectionType {
  collectionName: 'strapi_release_actions'
  info: {
    singularName: 'release-action'
    pluralName: 'release-actions'
    displayName: 'Release Action'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required
    entry: Attribute.Relation<'plugin::content-releases.release-action', 'morphToOne'>
    contentType: Attribute.String & Attribute.Required
    locale: Attribute.String
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >
    isEntryValid: Attribute.Boolean
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale'
  info: {
    singularName: 'locale'
    pluralName: 'locales'
    collectionName: 'locales'
    displayName: 'Locale'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1
          max: 50
        },
        number
      >
    code: Attribute.String & Attribute.Unique
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::i18n.locale', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::i18n.locale', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginUsersPermissionsPermission extends Schema.CollectionType {
  collectionName: 'up_permissions'
  info: {
    name: 'permission'
    description: ''
    singularName: 'permission'
    pluralName: 'permissions'
    displayName: 'Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String & Attribute.Required
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles'
  info: {
    name: 'role'
    description: ''
    singularName: 'role'
    pluralName: 'roles'
    displayName: 'Role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3
      }>
    description: Attribute.String
    type: Attribute.String & Attribute.Unique
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users'
  info: {
    name: 'user'
    description: ''
    singularName: 'user'
    pluralName: 'users'
    displayName: 'User'
  }
  options: {
    draftAndPublish: false
    timestamps: true
  }
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3
      }>
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    provider: Attribute.String
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: Attribute.String & Attribute.Private
    confirmationToken: Attribute.String & Attribute.Private
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >
    fileupload: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'api::fileupload.fileupload'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiCompanyCompany extends Schema.CollectionType {
  collectionName: 'companies'
  info: {
    singularName: 'company'
    pluralName: 'companies'
    displayName: 'company'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    name: Attribute.String
    address: Attribute.String
    risk_treatment: Attribute.Relation<
      'api::company.company',
      'manyToOne',
      'api::risk-treatment.risk-treatment'
    >
    information_asset_category: Attribute.Relation<
      'api::company.company',
      'manyToOne',
      'api::information-asset-category.information-asset-category'
    >
    fileupload: Attribute.Relation<'api::company.company', 'oneToOne', 'api::fileupload.fileupload'>
    email: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::company.company', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::company.company', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiCompanyQuestionnaireCompanyQuestionnaire extends Schema.CollectionType {
  collectionName: 'company_questionnaires'
  info: {
    singularName: 'company-questionnaire'
    pluralName: 'company-questionnaires'
    displayName: 'company-questionnaire'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    company_id: Attribute.String
    questionnaire_id: Attribute.String
    url: Attribute.UID
    supplier_id: Attribute.String
    status: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'api::company-questionnaire.company-questionnaire',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'api::company-questionnaire.company-questionnaire',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface ApiControlAssessmentControlAssessment extends Schema.CollectionType {
  collectionName: 'control_assessments'
  info: {
    singularName: 'control-assessment'
    pluralName: 'control-assessments'
    displayName: 'control_assessment'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    domain: Attribute.String
    annexControl: Attribute.String
    controlHeading: Attribute.String
    controlDescription: Attribute.Text
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'api::control-assessment.control-assessment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'api::control-assessment.control-assessment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface ApiControlDomainControlDomain extends Schema.CollectionType {
  collectionName: 'control_domains'
  info: {
    singularName: 'control-domain'
    pluralName: 'control-domains'
    displayName: 'control_domain'
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    domain: Attribute.String
    control_no: Attribute.String
    control_description: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::control-domain.control-domain', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::control-domain.control-domain', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiCustomerCategoryCustomerCategory extends Schema.CollectionType {
  collectionName: 'customer_categories'
  info: {
    singularName: 'customer-category'
    pluralName: 'customer-categories'
    displayName: 'customer_category'
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    category: Attribute.String
    description: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'api::customer-category.customer-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'api::customer-category.customer-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface ApiCustomerManagementCustomerManagement extends Schema.CollectionType {
  collectionName: 'customer_managements'
  info: {
    singularName: 'customer-management'
    pluralName: 'customer-managements'
    displayName: 'customer_management'
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    name: Attribute.String
    trading_as: Attribute.String
    abn_no: Attribute.String
    acn_no: Attribute.String
    website: Attribute.String
    glocal: Attribute.String
    address: Attribute.String
    country: Attribute.String
    state: Attribute.String
    suburb: Attribute.String
    postal_code: Attribute.String
    contact_person_name: Attribute.String
    phone_no: Attribute.String
    email: Attribute.String
    alt_person_name: Attribute.String
    alt_phone_no: Attribute.String
    alt_email: Attribute.String
    customer_category: Attribute.String
    customer_type: Attribute.String
    data_shared: Attribute.String
    department_managing: Attribute.String
    manager: Attribute.String
    contract_commencement_date: Attribute.String
    contract_end_date: Attribute.String
    cia_impact: Attribute.String
    agreement: Attribute.String
    approval_status: Attribute.String
    date_entered: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'api::customer-management.customer-management',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'api::customer-management.customer-management',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface ApiFileuploadFileupload extends Schema.CollectionType {
  collectionName: 'fileuploads'
  info: {
    singularName: 'fileupload'
    pluralName: 'fileuploads'
    displayName: 'fileupload'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    type: Attribute.String
    company: Attribute.Relation<'api::fileupload.fileupload', 'oneToOne', 'api::company.company'>
    users_permissions_users: Attribute.Relation<
      'api::fileupload.fileupload',
      'oneToMany',
      'plugin::users-permissions.user'
    >
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::fileupload.fileupload', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::fileupload.fileupload', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiInformationAssetCategoryInformationAssetCategory extends Schema.CollectionType {
  collectionName: 'information_asset_categories'
  info: {
    singularName: 'information-asset-category'
    pluralName: 'information-asset-categories'
    displayName: 'information_asset_category'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    category: Attribute.String
    description: Attribute.Text
    categoryType: Attribute.String
    companies: Attribute.Relation<
      'api::information-asset-category.information-asset-category',
      'oneToMany',
      'api::company.company'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'api::information-asset-category.information-asset-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'api::information-asset-category.information-asset-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface ApiQuestionQuestion extends Schema.CollectionType {
  collectionName: 'questions'
  info: {
    singularName: 'question'
    pluralName: 'questions'
    displayName: 'question'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    questionnaires_id: Attribute.String
    question: Attribute.String
    type: Attribute.String
    options: Attribute.String
    topic: Attribute.String
    notes: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::question.question', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::question.question', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiQuestionnaireQuestionnaire extends Schema.CollectionType {
  collectionName: 'questionnaires'
  info: {
    singularName: 'questionnaire'
    pluralName: 'questionnaires'
    displayName: 'questionnaire'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    title: Attribute.String
    description: Attribute.String
    type: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::questionnaire.questionnaire', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::questionnaire.questionnaire', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiQuestionnaireAnswerQuestionnaireAnswer extends Schema.CollectionType {
  collectionName: 'questionnaire_answers'
  info: {
    singularName: 'questionnaire-answer'
    pluralName: 'questionnaire-answers'
    displayName: 'questionnaire_answer'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    questionnaire_id: Attribute.String
    question_id: Attribute.String
    company_id: Attribute.String
    answer: Attribute.String
    supplier_id: Attribute.String
    type: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'api::questionnaire-answer.questionnaire-answer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'api::questionnaire-answer.questionnaire-answer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface ApiQuestionnaireTopicQuestionnaireTopic extends Schema.CollectionType {
  collectionName: 'questionnaire_topics'
  info: {
    singularName: 'questionnaire-topic'
    pluralName: 'questionnaire-topics'
    displayName: 'questionnaire_topic'
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    title: Attribute.String
    description: Attribute.String
    status: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'api::questionnaire-topic.questionnaire-topic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'api::questionnaire-topic.questionnaire-topic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface ApiResponsRespons extends Schema.CollectionType {
  collectionName: 'responses'
  info: {
    singularName: 'respons'
    pluralName: 'responses'
    displayName: 'respons'
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    questionnaire_id: Attribute.String
    question_id: Attribute.String
    response: Attribute.Text
    respondent_id: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::respons.respons', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::respons.respons', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiRiskRisk extends Schema.CollectionType {
  collectionName: 'risks'
  info: {
    singularName: 'risk'
    pluralName: 'risks'
    displayName: 'risk'
    description: ''
  }
  options: {
    draftAndPublish: true
    indexes: [
      {
        name: 'id'
        fields: ['id']
        unique: true
      }
    ]
  }
  attributes: {
    dateCreated: Attribute.String
    riskOwner: Attribute.String
    riskCategory: Attribute.String
    threat: Attribute.String
    vulnerability: Attribute.String
    informationAsset: Attribute.String
    ciaImpact: Attribute.String
    matrix: Attribute.String
    likelihood: Attribute.String
    initialImpact: Attribute.String
    risidualImpact: Attribute.String
    residualLikelihood: Attribute.String
    riskLevel: Attribute.String
    residualRiskLevel: Attribute.String
    riskAcceptable: Attribute.String
    riskApprovalDate: Attribute.String
    riskApprovalEvidence: Attribute.String
    riskAssessmentCompleted: Attribute.String
    riskTreatment: Attribute.String
    controlDomain: Attribute.String
    personResponsibleToImplement: Attribute.String
    treatmentApprovalDate: Attribute.String
    treatmentCompletionDate: Attribute.String
    residualTreatmentApprovalDate: Attribute.String
    approvalEvidence: Attribute.String
    nextReviewDate: Attribute.String
    riskTreatmentPlan: Attribute.String
    treatmentApprovalEvidence: Attribute.String
    controlMapped: Attribute.String
    notes: Attribute.String
    treatmentStatus: Attribute.String
    riskControlMap: Attribute.String
    currentControlEffective: Attribute.String
    currentControlInPlace: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::risk.risk', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::risk.risk', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface ApiRiskCategoryRiskCategory extends Schema.CollectionType {
  collectionName: 'risk_categories'
  info: {
    singularName: 'risk-category'
    pluralName: 'risk-categories'
    displayName: 'risk_category'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    category_domain: Attribute.String
    description: Attribute.Text
    categoryType: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::risk-category.risk-category', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::risk-category.risk-category', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiRiskOwnerRiskOwner extends Schema.CollectionType {
  collectionName: 'risk_owners'
  info: {
    singularName: 'risk-owner'
    pluralName: 'risk-owners'
    displayName: 'risk_owner'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    user_id: Attribute.String
    company: Attribute.String
    position: Attribute.String
    department: Attribute.String
    name: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::risk-owner.risk-owner', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::risk-owner.risk-owner', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiRiskTreatmentRiskTreatment extends Schema.CollectionType {
  collectionName: 'risk_treatments'
  info: {
    singularName: 'risk-treatment'
    pluralName: 'risk-treatments'
    displayName: 'risk_treatment'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    treatmentOption: Attribute.String
    description: Attribute.Text
    whenToUse: Attribute.String
    companies: Attribute.Relation<
      'api::risk-treatment.risk-treatment',
      'oneToMany',
      'api::company.company'
    >
    file: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::risk-treatment.risk-treatment', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::risk-treatment.risk-treatment', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiSupplierSupplier extends Schema.CollectionType {
  collectionName: 'suppliers'
  info: {
    singularName: 'supplier'
    pluralName: 'suppliers'
    displayName: 'supplier'
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    supplier_id: Attribute.String
    supplier_name: Attribute.String
    trading_as: Attribute.String
    abn_no: Attribute.String
    acn_no: Attribute.String
    website: Attribute.String
    bsb: Attribute.String
    bank_acc_no: Attribute.String
    bank_acc_name: Attribute.String
    glocal: Attribute.String
    supplier_type: Attribute.String
    address: Attribute.String
    country: Attribute.String
    state: Attribute.String
    suburb: Attribute.String
    postal_code: Attribute.String
    contact_person_name: Attribute.String
    contact_person_number: Attribute.String
    contact_person_email: Attribute.String
    support_person_name: Attribute.String
    support_person_number: Attribute.String
    support_person_email: Attribute.String
    payment_terms: Attribute.String
    notes: Attribute.String
    supplier_category: Attribute.String
    terms_for_use: Attribute.String
    ongoing_management: Attribute.String
    exit_terms: Attribute.String
    supplier_purpose: Attribute.String
    service_provider: Attribute.String
    data_shared: Attribute.String
    department_managing: Attribute.String
    owner: Attribute.String
    is_sla: Attribute.String
    sla_details: Attribute.String
    credit_limit: Attribute.String
    iso_27001: Attribute.String
    iso_9001: Attribute.String
    iso_14001: Attribute.String
    iso_45001: Attribute.String
    modern_slavery_act: Attribute.String
    modern_slavery_statement_date: Attribute.String
    certification: Attribute.String
    other_Certification_exists: Attribute.String
    annual_budget: Attribute.String
    contract_commencement_date: Attribute.String
    contract_end_date: Attribute.String
    cia_impact: Attribute.String
    threat: Attribute.String
    matrix: Attribute.String
    likelihood: Attribute.String
    impact: Attribute.String
    inherent_risk_level: Attribute.String
    risk_assessment_completed: Attribute.String
    risk_assessment_required: Attribute.String
    assessment_due_date: Attribute.String
    assessment_status: Attribute.String
    assessment_reviewer_person: Attribute.String
    supplier_agreement: Attribute.String
    approval_status: Attribute.String
    date_entered: Attribute.String
    decision_date: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::supplier.supplier', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::supplier.supplier', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission
      'admin::user': AdminUser
      'admin::role': AdminRole
      'admin::api-token': AdminApiToken
      'admin::api-token-permission': AdminApiTokenPermission
      'admin::transfer-token': AdminTransferToken
      'admin::transfer-token-permission': AdminTransferTokenPermission
      'plugin::upload.file': PluginUploadFile
      'plugin::upload.folder': PluginUploadFolder
      'plugin::content-releases.release': PluginContentReleasesRelease
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction
      'plugin::i18n.locale': PluginI18NLocale
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission
      'plugin::users-permissions.role': PluginUsersPermissionsRole
      'plugin::users-permissions.user': PluginUsersPermissionsUser
      'api::company.company': ApiCompanyCompany
      'api::company-questionnaire.company-questionnaire': ApiCompanyQuestionnaireCompanyQuestionnaire
      'api::control-assessment.control-assessment': ApiControlAssessmentControlAssessment
      'api::control-domain.control-domain': ApiControlDomainControlDomain
      'api::customer-category.customer-category': ApiCustomerCategoryCustomerCategory
      'api::customer-management.customer-management': ApiCustomerManagementCustomerManagement
      'api::fileupload.fileupload': ApiFileuploadFileupload
      'api::information-asset-category.information-asset-category': ApiInformationAssetCategoryInformationAssetCategory
      'api::question.question': ApiQuestionQuestion
      'api::questionnaire.questionnaire': ApiQuestionnaireQuestionnaire
      'api::questionnaire-answer.questionnaire-answer': ApiQuestionnaireAnswerQuestionnaireAnswer
      'api::questionnaire-topic.questionnaire-topic': ApiQuestionnaireTopicQuestionnaireTopic
      'api::respons.respons': ApiResponsRespons
      'api::risk.risk': ApiRiskRisk
      'api::risk-category.risk-category': ApiRiskCategoryRiskCategory
      'api::risk-owner.risk-owner': ApiRiskOwnerRiskOwner
      'api::risk-treatment.risk-treatment': ApiRiskTreatmentRiskTreatment
      'api::supplier.supplier': ApiSupplierSupplier
    }
  }
}
