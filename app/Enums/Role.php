<?php

namespace App\Enums;

enum Role: string {
    case SUPERADMIN     = "superadmin";
    case SUPERVISOR     = "supervisor";
    case FOREMAN        = "foreman";
    case SERVICEMAN     = "serviceman";
    case CUSTOMER       = "customer";
}
