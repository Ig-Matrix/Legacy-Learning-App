package com.example.demo.utilty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UnauthorizedAccessException extends Throwable {
    private String resource;
    private String requestedAction;

    public UnauthorizedAccessException(String message) {
        super(message);
    }

    public UnauthorizedAccessException(String message, String resource, String requestedAction) {
        super(message);
        this.resource = resource;
        this.requestedAction = requestedAction;
    }

    public void setResource(String resource) {
        this.resource = resource;
    }

    public void setRequestedAction(String requestedAction) {
        this.requestedAction = requestedAction;
    }
}
