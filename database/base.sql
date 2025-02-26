-- Tabela: users
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT null,
    created_at TIMESTAMPTZ DEFAULT NOW(),
  	updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela: realm
CREATE TABLE realm (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
  	updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela: realm_folder
CREATE TABLE folders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    realm_id UUID REFERENCES realm(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
  	updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela: user_ingroup_realm
CREATE TABLE user_infolder_realm (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    realm_folder_id UUID REFERENCES folders(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
  	updated_at TIMESTAMPTZ DEFAULT NOW()
);


-- Tabela: document
CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    doc_type VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ  DEFAULT NOW(),
  	updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela: doc_group
CREATE TABLE doc_infolder (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    doc_id UUID REFERENCES documents(id),
    folder_id UUID REFERENCES folders(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
  	updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE document_part (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_doc UUID REFERENCES documents(id),
    conteudo JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
  	updated_at TIMESTAMPTZ DEFAULT NOW()
);


-- -- Tabela: document_variant
-- CREATE TABLE document_variant (
--     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--     content TEXT,
--     version INTEGER NOT NULL,
--     document_base_id uuid REFERENCES document(id),
--     autor_id UUID REFERENCES users(id),
--     published BOOLEAN DEFAULT FALSE,
--     published_on DATE,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Tabela: document_release
-- CREATE TABLE document_release (
--     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--     content TEXT,
--     version INTEGER NOT NULL,
--     autor_id UUID REFERENCES users(id),
--     doc_variant UUID REFERENCES document_variant(id)
-- );
