<?php declare(strict_types=1);

namespace NpAdTemplate_03\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1621523044 extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1621523044;
    }

    public function update(Connection $connection): void
    {
        $query = <<<SQL
CREATE TABLE `faq` (
    `id` BINARY(16) NOT NULL,
    `question` VARCHAR(255) NOT NULL,
    `answer` VARCHAR(255) NOT NULL,
    `product_id` BINARY(16) NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NULL,
    PRIMARY KEY (`id`),
    KEY `fk.faq.product_id` (`product_id`),
    CONSTRAINT `fk.faq.product_id` FOREIGN KEY (`product_id`)
        REFERENCES `country`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
SQL;

        $connection->executeStatement($query);
    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
