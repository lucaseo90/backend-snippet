package com.github.lucaseo90.worldgdp.service.mapper;


import com.github.lucaseo90.worldgdp.domain.*;
import com.github.lucaseo90.worldgdp.service.dto.CountryLanguageDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link CountryLanguage} and its DTO {@link CountryLanguageDTO}.
 */
@Mapper(componentModel = "spring", uses = {CountryMapper.class})
public interface CountryLanguageMapper extends EntityMapper<CountryLanguageDTO, CountryLanguage> {

    @Mapping(source = "country.id", target = "countryId")
    @Mapping(source = "country.name", target = "countryName")
    CountryLanguageDTO toDto(CountryLanguage countryLanguage);

    @Mapping(source = "countryId", target = "country")
    CountryLanguage toEntity(CountryLanguageDTO countryLanguageDTO);

    default CountryLanguage fromId(Long id) {
        if (id == null) {
            return null;
        }
        CountryLanguage countryLanguage = new CountryLanguage();
        countryLanguage.setId(id);
        return countryLanguage;
    }
}
