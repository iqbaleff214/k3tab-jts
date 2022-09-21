<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Enums\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $users = [
            [
                'id' => 1,
                'name' => 'Administrator',
                'salary_number' => '000000000',
                'password' => Hash::make('admin'),
                'role' => Role::SUPERADMIN,
                'created_at' => now(),
                'updated_at' => now(),
                'superior_id' => null,
            ],
            [
                'id' => 2,
                'name' => 'Supervisor',
                'salary_number' => '000000001',
                'password' => Hash::make('admin'),
                'role' => Role::SUPERVISOR,
                'created_at' => now(),
                'updated_at' => now(),
                'superior_id' => 1,
            ],
            [
                'id' => 3,
                'name' => 'Foreman',
                'salary_number' => '000000002',
                'password' => Hash::make('admin'),
                'role' => Role::FOREMAN,
                'created_at' => now(),
                'updated_at' => now(),
                'superior_id' => 2,
            ],
            [
                'id' => 4,
                'name' => 'Serviceman',
                'salary_number' => '000000003',
                'password' => Hash::make('admin'),
                'role' => Role::SERVICEMAN,
                'created_at' => now(),
                'updated_at' => now(),
                'superior_id' => 3,
            ],
            [
                'id' => 5,
                'name' => 'Sales Support',
                'salary_number' => '000000004',
                'password' => Hash::make('admin'),
                'role' => Role::SALES,
                'created_at' => now(),
                'updated_at' => now(),
                'superior_id' => 2,
            ],
        ];

        // var_dump($users);

        User::insert($users);
    }
}
