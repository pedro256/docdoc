package com.pedro256.docdoc.services;


import com.pedro256.docdoc.dto.user.UserDto;
import com.pedro256.docdoc.entities.UserEntity;
import com.pedro256.docdoc.exceptions.NotFoundException;
import com.pedro256.docdoc.repository.users.IUserRepository;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.parser.Entity;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    private IUserRepository iUserRepository;

    public UUID createUser(UserDto dto) throws BadRequestException {
        if(this.iUserRepository.existsByUsername(dto.getUsername())){
            throw new BadRequestException("usuario já informado !");
        }
        UserEntity entity = new UserEntity();
        entity.setName(dto.getName());
        entity.setUsername(dto.getUsername());
        this.iUserRepository.save(entity);
        return entity.getId();
    }

    public Void updateUser(UserDto dto){
        UserEntity entity = new UserEntity();
        entity.setId(dto.getId());
        entity.setName(dto.getName());
//        entity.setUsername(dto.getUsername());
        this.iUserRepository.save(entity);
        return null;
    }

    public UserDto getOne(String id) throws NotFoundException {
        Optional<UserEntity> data = this.iUserRepository.findById(UUID.fromString(id));
        if(data.isEmpty()){
            throw new NotFoundException("usuário não encontrado");
        }
        UserEntity user = data.get();

        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setName(user.getName());
        userDto.setUsername(user.getUsername());

        return  userDto;
    }
}
