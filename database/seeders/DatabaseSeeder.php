<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

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
                'name' => 'Administrator',
                'salary_number' => '000000000',
                'password' => Hash::make('admin'),
                'role' => 'administrator',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Supervisor',
                'salary_number' => '000000001',
                'password' => Hash::make('admin'),
                'role' => 'supervisor',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Foreman',
                'salary_number' => '000000002',
                'password' => Hash::make('admin'),
                'role' => 'foreman',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Serviceman',
                'salary_number' => '000000003',
                'password' => Hash::make('admin'),
                'role' => 'serviceman',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        // var_dump($users);

        User::insert($users);
    }
}
