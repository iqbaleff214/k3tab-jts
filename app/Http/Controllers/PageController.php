<?php

namespace App\Http\Controllers;

use App\Enums\ServiceOrderStatus;
use App\Models\ServiceOrder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function dashboard(Request $request)
    {
        $soLoad = [
            'foreman', 'serviceman', 'servicemen', 'supervisor',
            'controlCard', 'controlCardApproved', 'controlCardAccepted',
            'controlCard.reporter', 'controlCardApproved.reporter', 'controlCardAccepted.reporter',
            'controlCard.attachments', 'controlCardApproved.attachments', 'controlCardAccepted.attachments',
        ];
        return Inertia::render('Dashboard', [
            'so' => [
                'todo' => ServiceOrder::dashboardCount(ServiceOrderStatus::TO_DO),
                'in_progress' => ServiceOrder::dashboardCount(ServiceOrderStatus::IN_PROGRESS),
                'done' => ServiceOrder::dashboardCount(ServiceOrderStatus::DONE),
            ],
            'service_order' => [
                'in_progress' => ServiceOrder::with($soLoad)->byRole()->status(ServiceOrderStatus::IN_PROGRESS)->get(),
            ],
        ]);
    }
}
