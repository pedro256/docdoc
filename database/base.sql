-- Tabela: users
CREATE TABLE users (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT null,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  	updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela: realm
CREATE TABLE realm (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  	updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela: realm_group
CREATE TABLE realm_group (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    realm_id UUID REFERENCES realm(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  	updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela: user_ingroup_realm
CREATE TABLE user_ingroup_realm (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    realm_group_id UUID REFERENCES realm_group(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  	updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela: realm_module_roles
CREATE TABLE realm_module_roles (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT null,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  	updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela: realm_roles
CREATE TABLE realm_roles (
    id UUID PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    tag VARCHAR(255) NOT NULL,
    realm_module UUID REFERENCES realm_module_roles(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  	updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela: realm_group_roles
CREATE TABLE realm_group_roles (
    id UUID PRIMARY KEY,
    realm_user_group UUID REFERENCES realm_group(id) ,
    role_id UUID REFERENCES realm_roles(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  	updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- Tabela: project
CREATE TABLE project (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description text,
    realm_id UUID REFERENCES realm(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  	updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela: doc_group
CREATE TABLE doc_group (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT null,
    project_id UUID REFERENCES project(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  	updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela: document
CREATE TABLE document (
    id UUID PRIMARY KEY,
    doc_type VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    doc_group UUID REFERENCES doc_group(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  	updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela: document_variant
CREATE TABLE document_variant (
    id UUID PRIMARY KEY,
    content TEXT,
    version INTEGER NOT NULL,
    document_base_id uuid REFERENCES document(id),
    autor_id UUID REFERENCES users(id),
    published BOOLEAN DEFAULT FALSE,
    published_on DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela: document_release
CREATE TABLE document_release (
    id UUID PRIMARY KEY,
    content TEXT,
    version INTEGER NOT NULL,
    autor_id UUID REFERENCES users(id),
    doc_variant UUID REFERENCES document_variant(id)
);
