package com.pedro256.docdoc.entities;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.type.SqlTypes;
import org.springframework.boot.json.GsonJsonParser;

import java.util.Date;
import java.util.Map;
import java.util.UUID;

@Data
@Entity(name = "documents")
public class DocumentBaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String docType;
    private String title;

    @Column(columnDefinition = "jsonb")
    @JdbcTypeCode(SqlTypes.JSON)
    private Map<String, Object> conteudo;

    @CreationTimestamp
    private Date createdAt;
    @UpdateTimestamp
    private Date updatedAt;

    public void  setConteudoByStr(String conteudo){
        GsonJsonParser gson = new GsonJsonParser();
        this.conteudo = gson.parseMap(conteudo);
    }

    public String getStrConteudo(){
        try {
            return new ObjectMapper().writeValueAsString(this.conteudo);
        } catch (JsonProcessingException e) {
            return "{}";
        }
    }
}
