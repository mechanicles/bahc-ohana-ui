# Change Log

## [?.?.?] - 2019-03-29
### ahc-sprint-20
### Added
  - db:seed now creates default admin user
### Changed
  - AHC-1150
    - Added icons inline with service wait time estimate values, handle unknown wait time

## [?.?.?] - 2019-03-15
### ahc-sprint-19
### Added
 - AHC-1068
    - Updated the app to use the rails, as opposed to just a subset of rails gems
    - Added database configuration and `pg` gem for PostgreSQL integration
    - Added devise gem and created a User model for authentication
    - Included an `admin` flag on the user to designate them as a user
    - Hide the `Service Wait Estimate` unless user is logged in.
    - Only allow admins to create new accounts.
