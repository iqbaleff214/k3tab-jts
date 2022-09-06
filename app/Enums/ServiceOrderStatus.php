<?php

namespace App\Enums;

enum ServiceOrderStatus: string {
    case TO_DO          = "todo";
    case IN_PROGRESS    = "in_progress";
    case DONE           = "done";
}
