package com.formsapp.service.impl;

import com.formsapp.model.FormSubmit;
import com.formsapp.model.projection.FormResponse;
import com.formsapp.repository.FormSubmitRepository;
import com.formsapp.service.FormSubmitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormSubmitServiceImpl implements FormSubmitService {

    @Autowired
    private FormSubmitRepository formSubmitRepository;

    /**
     * {@inheritDoc}
     */
    @Override
    public Boolean addSubmit(FormSubmit formSubmit) {
        if (formSubmit.getAnswers() != null) {
            formSubmit.getAnswers().forEach((answer) -> answer.setFormSubmit(formSubmit));
        }
        FormSubmit save = formSubmitRepository.save(formSubmit);
        return save.getSubId() > 0;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public FormSubmit getSubmit(String formId, String email) {
        return formSubmitRepository.findByFormIdAndEmail(formId, email);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public FormSubmit getSubmit(Long subId) {
        return formSubmitRepository.findBySubId(subId);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<FormResponse> getResponses(String formId) {
        return formSubmitRepository.findAllByFormId(formId);
    }
}
